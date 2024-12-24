"use client";
import { Terminal, Download, ChevronRight, Github } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Terminal className="h-6 w-6" />
            <span className="ml-2 font-bold">Android CLI</span>
          </div>
          <nav className="flex flex-1 items-center justify-end space-x-4 text-sm font-medium">
            <Link href="/docs" passHref legacyBehavior>
              <a className="text-foreground/60 hover:text-foreground">
                <Button variant="ghost">
                  Documentation
                </Button>
              </a>
            </Link>
            <Button variant="ghost" className="text-foreground/60 hover:text-foreground">
              About
            </Button>
            <Button variant="ghost" className="text-foreground/60 hover:text-foreground">
              <Github className="h-5 w-5" />
            </Button>
          </nav>
        </div>
      </header>
      <main>
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex max-w-[980px] flex-col items-start gap-4">
            <Badge variant="outline" className="text-sm">
              v1.0.0 - Now Available
            </Badge>
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Your ultimate mobile
              <br />
              command-line tool
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Execute CLI commands for seamless file operations. Free, open-source, and built for Android.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="h-11">
                <Download className="mr-2 h-4 w-4" /> Download Now
              </Button>
              <Button variant="outline" size="lg" className="h-11">
                View Documentation <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="container py-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
                Powerful CLI Features
              </h2>
              <div className="grid gap-6">
                <div className="grid gap-1">
                  <h3 className="text-lg font-semibold">File Operations</h3>
                  <p className="text-muted-foreground">
                    Create, modify, and manage files directly from your Android device with simple commands.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-semibold">Directory Management</h3>
                  <p className="text-muted-foreground">
                    Navigate and organize your directories efficiently using familiar Unix-like commands.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-semibold">System Integration</h3>
                  <p className="text-muted-foreground">
                    Access system information and perform advanced operations through an intuitive command interface.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-700 opacity-20 blur-3xl" />
              <div className="relative h-full rounded-lg border bg-card p-4 shadow-2xl">
                <pre className="h-full overflow-auto rounded bg-black p-4 font-mono text-sm text-green-400">
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
          </div>
        </section>

        <section className="border-t bg-muted/50">
          <div className="container py-12">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-2 font-semibold">Getting Started</h3>
                <p className="text-sm text-muted-foreground">
                  Download the app and start using powerful CLI commands on your Android device in minutes.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-2 font-semibold">Documentation</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive guides and examples to help you make the most of Android CLI.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-2 font-semibold">Community</h3>
                <p className="text-sm text-muted-foreground">
                  Join our open-source community and contribute to the development of Android CLI.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex h-14 items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © 2024 Android CLI. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with ❤️ by the community
          </p>
        </div>
      </footer>
    </div>
  )
}

