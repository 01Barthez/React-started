import 'dotenv-safe/config';
import * as env from 'env-var';

const { get } = env;

const envs = {
  PORT: get('PORT').default(4000).asPortNumber(),
  NODE_ENV: get('NODE_ENV').default('development').asString(),
  HOST: get('HOST').default('0.0.0.0').asString(),
};

export default envs;
