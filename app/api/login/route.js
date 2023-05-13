import { connectToDB } from "@/utils/database";
import Users from "@/models/UserModel";

export const POST = async (req) => {
  const { username, password } = await req.json();
  console.log(username, password);
  try {
    await connectToDB();
    const user = await Users.findOne({ email:username });
    if (user && user.password === password) {
      return new Response(JSON.stringify(user), { status: 200 });
    } else return new Response(JSON.stringify(null));
  } catch (error) {
    console.log(error);
    return new Response("Failed", { status: 500 });
  }
};
