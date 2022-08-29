import * as AWS from "aws-sdk";
import logger from "../utils/logger";

const dbCredProvider = async function() {
  // if it's available in the local environment take it from there, else resolve from the ssm parameter store.
  if (process.env.STAGE == "local") {
    return {
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    };
  }
  else {
    try {
      const ssm = new AWS.SSM({ apiVersion: "2014-11-06", region: process.env.REGION || "ap-southeast-1" });
      const path = `/dvdstore/${process.env.STAGE}/DbConnectionInfo/`;
      const params = { Path: path, WithDecryption: true, Recursive: true };
      const result = await ssm.getParametersByPath(params).promise();
      console.log(result);
      const dbCredentials = result.Parameters.reduce((prev, cur) => ({
        ...prev,
        [cur.Name.replace(path, "")]: cur.Value
      }), {});
      console.log("dbCredentials", dbCredentials);
      return dbCredentials;
    } catch (e) {
      logger.error(`Failed to resolved db credentials ${e}`);
      throw e;
    }
  }
};

export default dbCredProvider;