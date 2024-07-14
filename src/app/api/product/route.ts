import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Sepatu Baru",
    price: 150000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6b16e736-a958-4816-89a3-542601b6616f/ja-1-ep-basketball-shoes-XncH16.png",
  },
  {
    id: 2,
    title: "Sepatu Baru Dong",
    price: 1750000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6b16e736-a958-4816-89a3-542601b6616f/ja-1-ep-basketball-shoes-XncH16.png",
  },
  {
    id: 3,
    title: "Sepatu Baru Dong",
    price: 2000000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6b16e736-a958-4816-89a3-542601b6616f/ja-1-ep-basketball-shoes-XncH16.png",
  },
  {
    id: 4,
    title: "Sepatu Baru Dong",
    price: 2000000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6b16e736-a958-4816-89a3-542601b6616f/ja-1-ep-basketball-shoes-XncH16.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }

  const products = await retrieveData("products");

  return NextResponse.json({ status: 200, message: "Success", data: products });
}
