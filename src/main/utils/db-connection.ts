import models from "../models";
import migrations from "../migrations";
import { DataSource } from "typeorm";
import dbCredProvider from "./db-credential-resolver";

let dataSource;

const getDbConnection = async () => {
  const dbConnectionInfo = await dbCredProvider();
  if(dataSource==null){
    try{
      dataSource = new DataSource({
        type: "postgres",
        host: dbConnectionInfo["host"],
        port: 5432,
        username: dbConnectionInfo["username"],
        password: dbConnectionInfo["password"],
        database: dbConnectionInfo["database"],
        entities: [
          ...models
        ],
        migrations: [...migrations],
        migrationsRun: true
      });
      await dataSource.initialize();
      await dataSource.runMigrations({});
    }catch (e){
      console.log(e)
    }

  }
  return dataSource;
};

export default getDbConnection;
