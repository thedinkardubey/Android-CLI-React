'use client'

import { Button } from "@/components/ui/button"
// import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function DocsPage() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 md:text-4xl">Android CLI Documentation</h1>
      <p className="mb-8 text-lg">Welcome to the Android CLI documentation. Here you&apos;ll find comprehensive guides and examples to help you make the most of Android CLI.</p>

      <section id="getting-started" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 md:text-3xl">Getting Started</h2>
        <p className="mb-4">To begin using Android CLI, follow these steps:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Download the Android CLI app from the Google Play Store</li>
          <li>Install the app on your Android device</li>
          <li>Open the app and grant necessary permissions</li>
          <li>Start using CLI commands in the terminal interface</li>
        </ol>
      </section>

      <section id="supported-commands" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 md:text-3xl">Supported Commands</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { name: 'append', usage: 'Append content to a file.', example: 'append filename.txt This is additional content' },
            { name: 'cat', usage: 'Display file contents.', example: 'cat filename.txt' },
            { name: 'cd', usage: 'Change directory.', example: 'cd directory_name' },
            { name: 'clear', usage: 'Clear the terminal output.', example: 'clear' },
            { name: 'date', usage: 'Print the current date and time.', example: 'date' },
            { name: 'echo', usage: 'Print a message.', example: 'echo Hello, world!' },
            { name: 'exit', usage: 'Exits the app.', example: 'exit' },
            { name: 'help', usage: 'Display help message.', example: 'help' },
            { name: 'history', usage: 'Display command history.', example: 'history' },
            { name: 'ls', usage: 'List directory contents.', example: 'ls' },
            { name: 'mkdir', usage: 'Create a new directory.', example: 'mkdir new_directory' },
            { name: 'open', usage: 'Open a file.', example: 'open filename.txt' },
            { name: 'pwd', usage: 'Print the current directory.', example: 'pwd' },
            { name: 'rm', usage: 'Remove a file.', example: 'rm filename.txt' },
            { name: 'rmdir', usage: 'Remove a directory.', example: 'rmdir directory_name' },
            { name: 'touch', usage: 'Create a new file.', example: 'touch new_file.txt' },
            { name: 'whoami', usage: 'Print the device username.', example: 'whoami' },
          ].map((command) => (
            <div key={command.name} className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">{command.name}</h3>
              <p className="mb-2 text-sm">Usage: {command.usage}</p>
              <p className="text-xs text-muted-foreground">Example: {command.example}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 md:text-3xl">Features</h2>
        <p className="mb-4">The Android CLI App offers the following features:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Command Execution:</strong> Execute commands directly in the terminal interface.</li>
          <li><strong>File Management:</strong> Create, read, update, and delete files and directories with ease.</li>
          <li><strong>Auto-Completion:</strong> Basic auto-completion for efficient command typing.</li>
          <li><strong>Device Information:</strong> Retrieve device username and other system information.</li>
          <li><strong>Command History:</strong> Access a history of executed commands for quick reference and reuse.</li>
        </ul>
      </section>

      {/* <section id="advanced-usage" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 md:text-3xl">Advanced Usage</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Command History Navigation</h3>
            <p>Use the up and down arrow keys to navigate through your command history. This allows you to quickly access and reuse previously executed commands.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">File Editing</h3>
            <p>While Android CLI doesn&apos;t include a built-in text editor, you can use the &quot;echo&quot; command with output redirection to add content to files. For example:</p>
            <pre className="bg-gray-100 p-2 rounded mt-2">
              <code>echo &quot;Hello, World!&quot; &gt; myfile.txt</code>
            </pre>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Combining Commands</h3>
            <p>You can combine multiple commands using semicolons. For example:</p>
            <pre className="bg-gray-100 p-2 rounded mt-2">
              <code>mkdir new_folder; cd new_folder; touch new_file.txt; ls</code>
            </pre>
            <p>This sequence of commands creates a new folder, changes to that folder, creates a new file, and then lists the contents of the folder.</p>
          </div>
        </div>
      </section> */}

      <section id="troubleshooting" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 md:text-3xl">Troubleshooting</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>If a command isn&apos;t working, check that you have the necessary permissions for the operation you&apos;re trying to perform.</li>
          <li>Make sure you&apos;re in the correct directory when trying to access or manipulate files.</li>
          <li>If the app becomes unresponsive, try closing and reopening it.</li>
          <li>For further assistance, use the &quot;help&quot; command or contact our support team through the app&apos;s settings.</li>
        </ul>
      </section>

      {showBackToTop && (
        <Button
          size="sm"
          className="fixed bottom-4 right-4 rounded-full p-2"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ChevronUp className="h-4 w-4" />
        </Button>
      )}
    </>
  )
}

