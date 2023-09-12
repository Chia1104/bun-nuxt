export default defineEventHandler(async (event) => {
  const getServerRuntime = () => {
    try {
      return Bun.env.RUNTIME_ENV;
    } catch (e: any) {
      return `node (ERROR: ${e.message})`;
    }
  };
  const getPassword = async () => {
    try {
      const password = "super-secure-pa$$word";
      return await Bun.password.hash(password);
    } catch (e: any) {
      return `ERROR: ${e.message}`;
    }
  };
  return {
    serverRuntime: getServerRuntime(),
    password: await getPassword(),
  };
});
