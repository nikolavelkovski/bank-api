export const branchResponse = (branch: any) => ({
  id: branch.id,
  name: branch.name,
  address: branch.address,
  city: branch.city,
  working_hours: branch.working_hours,
  location: {
    lat: branch.lat,
    lon: branch.lon,
  },
  has_atm: branch.has_atm,
});
