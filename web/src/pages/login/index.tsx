import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen -mt-16">
      <div className="bg-gray-800 rounded-md w-full p-10 mx-0 md:mx-40">

        <div className="text-2xl font-bold mb-5">Welcome</div>
        <Input />
        <Button href="/">Login</Button>
      </div>
    </div>
  )
}