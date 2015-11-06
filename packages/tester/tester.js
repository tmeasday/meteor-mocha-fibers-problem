testFunction = () => {
  Meteor._sleepForMs(1);
  throw new Error();
}