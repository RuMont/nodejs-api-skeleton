
/**
 * Check if the required env variables are set.
 * Required env variables to launch this server are:
 * - DB_PROVIDER = mysql
 * - DB_HOST = anyHost
 * - DB_PORT = anyPort
 * - DB_USER = anyUser
 * - DB_PWD = anyPassword
 * - DB_DBNAME = databaseName
 */
export const envValidator = () => {
    if (process.env.DB_PROVIDER != "mysql")
    throw new Error("Environment variable DB_PROVIDER must be set to 'mysql'");
    if (!process.env.DB_HOST?.length)
    throw new Error("Environment variable DB_HOST can not be empty'");
    if (((process.env.DB_PORT as unknown) as number) < 1)
    throw new Error("Environment variable DB_PORT must be a valid port'");
    if (!process.env.DB_USER?.length)
    throw new Error("Environment variable DB_USER can not be empty'");
    if (!process.env.DB_PWD?.length)
    console.log("Environment variable DB_PWD should not be empty.'");
    if (!process.env.DB_DBNAME?.length)
    throw new Error("Environment variable DB_DBNAME can not be empty'");
}