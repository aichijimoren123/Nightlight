import { Input } from "@/components/ui/Input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function Login() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Card className="w-[23rem] h-[24rem]">
        {/* 卡片头部 */}
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your account and password to login
          </CardDescription>
        </CardHeader>
        {/* 卡片内容 */}
        <CardContent className=" flex flex-col gap-7">
          <Input placeholder="Username" />
          <Input placeholder="Password" />
        </CardContent>
        <CardFooter>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
