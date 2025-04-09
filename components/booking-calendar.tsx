"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export function BookingCalendar() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [service, setService] = useState("")
  const { toast } = useToast()

  const availableTimes = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!date || !time || !name || !email || !service) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      return
    }

    // Format date for display
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    toast({
      title: "Consultation Scheduled!",
      description: `Your consultation is scheduled for ${formattedDate} at ${time}. We'll send a confirmation to ${email}.`,
    })

    // Reset form
    setDate(undefined)
    setTime("")
    setName("")
    setEmail("")
    setService("")
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Schedule a Consultation</CardTitle>
        <CardDescription>Book a free 30-minute consultation with one of our expert consultants.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Service Interest</Label>
            <Select value={service} onValueChange={setService} required>
              <SelectTrigger id="service">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="business-strategy">Business Strategy</SelectItem>
                <SelectItem value="financial-consulting">Financial Consulting</SelectItem>
                <SelectItem value="marketing-strategy">Marketing Strategy</SelectItem>
                <SelectItem value="operations-management">Operations Management</SelectItem>
                <SelectItem value="general-consultation">General Consultation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Select Date</Label>
              <div className="border rounded-md p-2">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => {
                    // Disable weekends and past dates
                    const day = date.getDay()
                    const isPastDate = date < new Date(new Date().setHours(0, 0, 0, 0))
                    return day === 0 || day === 6 || isPastDate
                  }}
                  className="rounded-md border"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Select Time</Label>
              <div className="grid grid-cols-2 gap-2 h-[300px] overflow-y-auto border rounded-md p-2">
                {availableTimes.map((t) => (
                  <Button
                    key={t}
                    type="button"
                    variant={time === t ? "default" : "outline"}
                    className={time === t ? "bg-primary text-primary-foreground" : ""}
                    onClick={() => setTime(t)}
                  >
                    {t}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="primary-button w-full">
            Schedule Consultation
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
