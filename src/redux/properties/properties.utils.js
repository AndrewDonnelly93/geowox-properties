export const setCurrentProperty = (collections, currentProperty) => {
  return collections.filter(({lat, lon}) => currentProperty.lat === lat && currentProperty.lon === lon)[0];
};