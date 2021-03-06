  const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("The action is : ",action);
  const returnValue = next(action);
  console.log("This is the new state ", store.getState());
  console.groupEnd();
  return returnValue;
};


export default logger