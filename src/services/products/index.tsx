export const getData = async (url: string) => {
  // const res = await fetch("https://fakestoreapi.com/products", {
  //   cache: "no-cache",
  // });
  const res = await fetch(url, {
    cache: "no-cache",
    next: {
      tags: ["products"],
      // revalidate: 30,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
