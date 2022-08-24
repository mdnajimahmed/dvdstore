import models from '../models';
import { Connection, ConnectionManager, ConnectionOptions, createConnection, getConnectionManager } from 'typeorm';
import AWS from 'aws-sdk';
import mysql from 'mysql';
import dbCredProvider from "./db-credential-resolver";

export default class Database {
  private connectionManager: ConnectionManager;

  constructor() {
    this.connectionManager = getConnectionManager();
  }

  public async getConnection(): Promise<Connection> {
    const CONNECTION_NAME = `default`;
    console.log(mysql, 'defs');
    try {
      let connection: Connection;
      if (this.connectionManager.has(CONNECTION_NAME)) {
        connection = await this.connectionManager.get(CONNECTION_NAME);
        if (!connection.isConnected) {
          connection = await connection.connect();
        }
      } else {
        let dbConnectionInfo;
        if (process.env.LOCAL == 'LOCAL')
          dbConnectionInfo = {
            username: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            host: process.env.MYSQL_HOST,
            dbInstanceIdentifier: process.env.MYSQL_DB,
            port: process.env.MYSQL_PORT,
          };
        else dbConnectionInfo = await dbConnectionInfo();
        const connectionOptions: ConnectionOptions = {
          type: 'mysql',
          username: dbConnectionInfo['username'],
          password: dbConnectionInfo['password'],
          host: dbConnectionInfo['host'],
          database: dbConnectionInfo['dbInstanceIdentifier'],
          port: dbConnectionInfo['port'],
          entities: [...models],
          synchronize: false
        };
        const dbConnectionInfoLogged = { ...dbConnectionInfo, password: '?' };
        console.log('using connection', dbConnectionInfoLogged);
        connection = await createConnection(connectionOptions);
      }
      return connection;
    } catch (error) {
      console.log('DB CONNECTION ERROR: ', error);
      throw new Error();
    }
  }
}
