"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell
} from "@/components/ui/table"

export default function ExamplesPage() {
  const [inputValue, setInputValue] = useState("")

  return (
    <main className="px-4 sm:px-8 py-8 space-y-8 sm:space-y-12 mx-auto max-w-6xl">
      <h1 className="text-3xl font-semibold">Component Examples</h1>

      {/* Buttons */}
      <section>
        <h2 className="text-2xl font-medium mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      {/* Badge & Card */}
      <section>
        <h2 className="text-2xl font-medium mb-4">Card & Badge</h2>
        <Card className="max-w-sm">
          <CardHeader className="flex items-center justify-between">
            <span className="font-semibold">Sample Card</span>
            <Badge>New</Badge>
          </CardHeader>
          <CardContent>
            This is a simple card demonstrating how text fits within the component.
          </CardContent>
        </Card>
      </section>

      {/* Input */}
      <section>
        <h2 className="text-2xl font-medium mb-4">Input</h2>
        <Input
          placeholder="Type something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="max-w-xs"
        />
        <p className="mt-2 text-sm text-muted-foreground">Value: {inputValue}</p>
      </section>

      {/* Dialog */}
      <section>
        <h2 className="text-2xl font-medium mb-4">Dialog</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Example Dialog</DialogTitle>
              <DialogDescription>
                This is a simple dialog component. Close it by clicking outside or the button below.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="secondary">Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      {/* Tabs */}
      <section>
        <h2 className="text-2xl font-medium mb-4">Tabs</h2>
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList className="mb-4">
            <TabsTrigger value="tab1">Tab One</TabsTrigger>
            <TabsTrigger value="tab2">Tab Two</TabsTrigger>
          </TabsList>
          <div className="border rounded-md p-4">
            <p className="text-sm text-muted-foreground">(Tab content switches client-side)</p>
          </div>
        </Tabs>
      </section>

      {/* Table */}
      <section>
        <h2 className="text-2xl font-medium mb-4">Table</h2>
        <div className="overflow-x-auto">
          <Table className="w-full max-w-2xl min-w-[400px]">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Alpha</TableCell>
                <TableCell>
                  <Badge>Active</Badge>
                </TableCell>
                <TableCell className="text-right">42</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Beta</TableCell>
                <TableCell>
                  <Badge variant="secondary">Pending</Badge>
                </TableCell>
                <TableCell className="text-right">17</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
  )
} 