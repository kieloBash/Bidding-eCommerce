import { connectToDB } from "@/utils/database";
import Users from "@/models/UserModel";

export const POST = async (req) => {
  const { data } = await req.json();
  try {
    await connectToDB();
    const newUser = new Users({
      email: data.email,
      username: data.username,
      password: data.password,
    });

    await newUser.save();
    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to Sign up new user", { status: 404 });
  }
};
