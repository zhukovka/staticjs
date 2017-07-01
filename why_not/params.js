const fn = (fn, {required = []}) => (params = {}) => {
  const missing = required.filter(param => !(param in params));

  if (missing.length) {
    throw new Error(`${ fn.name }() Missing required parameter(s):
    ${ missing.join(', ') }`);
  }

  return fn(params);
};

const createEmployee = fn(
  ({
    name = '',
    hireDate = Date.now(),
    title = 'Worker Drone'
  } = {}) => ({
    name, hireDate, title
  }),
  {
    required: ['name']
  }
);

console.log(createEmployee({ name: 'foo' })); // works
createEmployee(); // createEmployee() Missing required parameter(s): name
