import 'dotenv-safe/config'
import { get } from 'env-var'

export const envs = {
	PORT: get('PORT').default(3000).asPortNumber(),
	NODE_ENV: get('NODE_ENV').default('development').asString(),
	HOST: get('HOST').default('0.0.0.0').asString(),
}
