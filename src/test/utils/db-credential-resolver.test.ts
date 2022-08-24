// disabled : need to figure out the best way to run this test in ci-cd pipeline.
import dbCredProvider from "../../main/utils/db-credential-resolver";
import {assert} from 'chai'
import getDbConnection from "../../main/utils/db-connection";

describe('Unit test for db connection info from SSM', function () {

  it('verifies successful response', async () => {

    const result = await dbCredProvider();

    assert(result)
  });
});

describe('Unit test for db connection', function () {

  it('verifies successful response', async () => {

    const result = await getDbConnection();

    assert(result)
  });
});