import * as AWS from 'aws-sdk';
import logger from "../utils/logger";
const dbCredProvider = async function(){
  try{
    const ssm = new AWS.SSM({apiVersion: '2014-11-06',region: process.env.REGION || 'ap-southeast-1'});
    const path = '/dvdstore/dev/DbConnectionInfo/'
    const params = { Path : path,WithDecryption: true,Recursive: true };
    const result = await ssm.getParametersByPath(params).promise();
    console.log(result)
    const dbCredentials = result.Parameters.reduce((prev,cur)=>({
      ...prev,
      [cur.Name.replace(path,'')]:cur.Value
    }),{})
    console.log("dbCredentials",dbCredentials)
    return dbCredentials;
  }catch (e){
    logger.error(`Failed to resolved db credentials ${e}`)
    throw e;
  }
}

export default dbCredProvider;