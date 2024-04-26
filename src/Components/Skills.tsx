import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"
import { Progress } from "@/Components/ui/progress"


const Skills = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-4xl cursor-default hover:underline mb-4">My Skills</h1>
          <p className="font-light text-lg cursor-default">Learning new thing make things fun, solving new problems and using new tools.</p>
        </div>
        <div className="flex w-full my-12 justify-between">
          {/* card 1 */}
          <div className="h-auto w-[380px]">
            <Card className="h-[465px] border-none">
              <CardHeader>
                <CardTitle>Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <span>
                  <h2 className="font-bold pb-2 pl-2">HTML</h2>
                  <Progress value={95} indicatorColor="bg-blue-300" className="mb-4 border-none transition-all fill-white"/>
                </span>
                <span>
                  <h2 className="font-bold pb-2 pl-2">CSS</h2>
                  <Progress value={90} indicatorColor="bg-blue-300" className="mb-4 border-none transition-all fill-white"/>
                </span>
                <span>
                  <h2 className="font-bold pb-2 pl-2">JavaScript</h2>
                  <Progress value={75} indicatorColor="bg-blue-300" className="mb-4 border-none transition-all fill-white"/>
                </span>
                <span>
                  <h2 className="font-bold pb-2 pl-2">TypeScript</h2>
                  <Progress value={79} indicatorColor="bg-blue-300" className="mb-4 border-none transition-all fill-white"/>
                </span>
                <span>
                  <h2 className="font-bold pb-2 pl-2">React Js</h2>
                  <Progress value={80} indicatorColor="bg-blue-300" className="mb-2 border-none transition-all fill-white"/>
                </span>
                <span>
                  <h2 className="font-bold pb-2 pl-2">Tailwind</h2>
                  <Progress value={90} indicatorColor="bg-blue-300" className="mb-2 border-none transition-all fill-white"/>
                </span>
              </CardContent>
            </Card>
          </div>

          {/* card 2 */}
          <div className="h-auto w-[380px] ">
            <Card className="h-[465px] border-none">
              <CardHeader>
                <CardTitle>Backend</CardTitle>
              </CardHeader>
              <CardContent className="">
                <span>
                  <h2 className="font-bold pb-2 pl-2">Express JS</h2>
                  <Progress value={60} indicatorColor="bg-blue-300" className="mb-4 border-none transition-all fill-white"/>
                </span>
                <span>
                  <h2 className="font-bold pb-2 pl-2">TypeScript</h2>
                  <Progress value={79} indicatorColor="bg-blue-300" className="mb-4 border-none transition-all fill-white"/>
                </span>
                <span>
                  <h2 className="font-bold pb-2 pl-2">Python</h2>
                  <Progress value={70} indicatorColor="bg-blue-300" className="mb-4 border-none transition-all fill-white"/>
                </span>
                <span>
                  <h2 className="font-bold pb-2 pl-2">C/C++</h2>
                  <Progress value={65} indicatorColor="bg-blue-300" className="mb-4 border-none transition-all fill-white"/>
                </span>
              </CardContent>
            </Card>
          </div>

          {/* card 3 */}
          <div className="h-auto w-[380px] ">
            <Card className="h-[465px] border-none">
              <CardHeader>
                <CardTitle>Database</CardTitle>
              </CardHeader>
              <CardContent className="">
                <span>
                  <h2 className="font-bold pb-2 pl-2">My SQL</h2>
                  <Progress value={70} indicatorColor="bg-blue-300" className="mb-4 border-none transition-all fill-white"/>
                </span>
                <span>
                  <h2 className="font-bold pb-2 pl-2">MongoDB</h2>
                  <Progress value={65} indicatorColor="bg-blue-300" className="mb-4 border-none transition-all fill-white"/>
                </span>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills