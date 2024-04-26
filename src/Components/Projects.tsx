import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"
import { Badge } from "@/Components/ui/badge"


const Projects = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-4xl cursor-default hover:underline mb-4">Projects</h1>
        </div>
        <div className="flex w-full justify-between my-8">

          {/* card 1 */}
          <div>
            <Card className="h-[530px] w-[400px] border-none">
              <CardHeader>
                <CardTitle className="flex flex-col w-full items-center justify-center cursor-default hover:underline">Eco Millets Hub</CardTitle>
              </CardHeader>
              <CardContent className="">
                <div>
                  <a href="https://github.com/Suharshit/Eco-Millets-Hub-typescript" target="_blank">
                    <video src="/assets/Website-video/eco-millets-hub.mp4" className="rounded-lg" autoPlay muted loop></video>
                  </a>
                </div>
                <div className="mt-2 flex space-x-3">
                  <h3 className="font-semibold">Summary:</h3>
                  <p className="font-light ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus praesentium, aut necessitatibus ipsa nobis quae distinctio fugiat illo commodi beatae.</p>
                </div>
                <div className="mt-2 flex-col">
                  <h3>Developing Technologies: </h3>
                  <div className="flex mt-2 space-x-1.5">
                    <Badge variant="outline" className="border-purple-600">React Js</Badge>
                    <Badge variant="outline" >Tailwind</Badge>
                    <Badge variant="outline" className="border-blue-600">TypeScript</Badge>
                    <Badge variant="outline" className="border-red-600">Chart Js</Badge>
                  </div>
                  <div className="flex mt-1.5">
                    <Badge variant="outline" className="border-blue-600">Express Js</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* card 2 */}
          <div>
            <Card className="h-[530px] w-[400px] border-none">
              <CardHeader>
                <CardTitle className="flex flex-col w-full items-center justify-center cursor-default hover:underline">Readaholic</CardTitle>
              </CardHeader>
              <CardContent className="">
                <div>
                  <a href="https://github.com/Suharshit/Readaholics" target="_blank">
                    <video src="/public/assets/Website-video/readaholic.mp4" className="rounded-lg" autoPlay muted loop></video>
                  </a>
                </div>
                <div className="mt-2 flex space-x-3">
                  <h3 className="font-semibold">Summary:</h3>
                  <p className="font-light ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus praesentium, aut necessitatibus ipsa nobis quae distinctio fugiat illo commodi beatae.</p>
                </div>
                <div className="mt-2 flex-col">
                  <h3>Developing Technologies: </h3>
                  <div className="flex mt-2 space-x-1.5">
                    <Badge variant="outline" className="border-purple-600">HTML</Badge>
                    <Badge variant="outline" >CSS</Badge>
                    <Badge variant="outline" className="border-blue-600">JavaScript</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* card 3 */}
          <div>
            <Card className="h-[530px] w-[400px] border-none">
              <CardHeader>
                <CardTitle className="flex flex-col w-full items-center justify-center cursor-default hover:underline">Reyban (Landing page)</CardTitle>
              </CardHeader>
              <CardContent className="">
                <div>
                  <a href="https://github.com/Suharshit/reyban-clone" target="_blank">
                    <video src="/public/assets/Website-video/rayban.mp4" className="rounded-lg" autoPlay muted loop></video>
                  </a>
                </div>
                <div className="mt-2 flex space-x-3">
                  <h3 className="font-semibold">Summary:</h3>
                  <p className="font-light ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus praesentium, aut necessitatibus ipsa nobis quae distinctio fugiat illo commodi beatae.</p>
                </div>
                <div className="mt-2 flex-col">
                  <h3>Developing Technologies: </h3>
                  <div className="flex mt-2 space-x-1.5">
                    <Badge variant="outline" className="border-purple-600">HTML</Badge>
                    <Badge variant="outline" >CSS</Badge>
                    <Badge variant="outline" className="border-blue-600">JavaScript</Badge>
                    <Badge variant="outline" className="border-red-600">Shery Js</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </>
  )
}

export default Projects