export const generateSlug = (title) => {
  const titleBeforeColon = title.split(/[:?]/)[0];
  return titleBeforeColon
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};
