export const chapters = [
  'Airplane General, Emergency Equipment, Doors, Windows', 'Air Systems',
  'Anti-Ice, Rain', 'Automatic Flight', 'Communications', 'Electrical',
  'Engines, APU', 'Fire Protection', 'Flight Controls',
  'Flight Instruments, Displays', 'Flight Management, Navigation', 'Fuel',
  'Hydraulics', 'Landing Gear', 'Warning Systems',
];

export const slug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
