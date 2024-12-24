import { Download, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-12 md:py-20">
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4">v1.0.0 Now Available</Badge>
          <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Your Ultimate Mobile<br className="hidden sm:inline" />Command-Line Tool
          </h1>
          <p className="mb-8 max-w-[42rem] leading-normal text-muted-foreground sm:text-lg md:text-xl">
            Execute powerful CLI commands directly on your Android device. Streamline your workflow with seamless file operations, all for free and open-source.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <a href="https://github.com/thedinkardubey/Android-CLI/releases/download/v1.0.0/app-release.apk" download>
              <Button size="lg" className="w-full sm:w-auto">
                <Download className="mr-2 h-4 w-4" /> Download APK
              </Button>
            </a>
            <Link href="/docs" passHref legacyBehavior>
            {/* <a> */}
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <a>
                  View Documentation <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              {/* </a> */}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">Powerful CLI Features</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-xl font-semibold">File Operations</h3>
            <p className="text-muted-foreground">
              Create, modify, and manage files directly from your Android device with simple commands.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-xl font-semibold">Directory Management</h3>
            <p className="text-muted-foreground">
              Navigate and organize your directories efficiently using familiar Unix-like commands.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-xl font-semibold">System Integration</h3>
            <p className="text-muted-foreground">
              Access system information and perform advanced operations through an intuitive command interface.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="rounded-lg border bg-card p-4 md:p-8">
          <h2 className="mb-4 text-xl font-bold sm:text-2xl">Try It Out</h2>
          <div className="rounded-md bg-black p-4 overflow-x-auto">
            <pre className="text-xs sm:text-sm text-green-400">
              <code>{`$ help
Available Commands:
  append    Append content to a file
  cat       Display file contents
  cd        Change directory
  clear     Clear the terminal output
  date      Print the current date and time
  echo      Print a message
  exit      Exits the app
  help      Display this help message
  history   Display the command history
  ls        List directory contents
  mkdir     Create a new directory
  pwd       Print the current directory
  rm        Remove a file
  touch     Create a new file
  whoami    Print the current username

$ touch example.txt
File example.txt created

$ ls
example.txt

$ _`}</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  )
}

