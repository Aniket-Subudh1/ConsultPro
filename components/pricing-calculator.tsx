"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/hooks/use-toast"

export function PricingCalculator() {
  const [employees, setEmployees] = useState(10)
  const [revenue, setRevenue] = useState(500000)
  const [services, setServices] = useState({
    strategy: true,
    financial: false,
    marketing: false,
    operations: false,
  })
  const [annualBilling, setAnnualBilling] = useState(false)
  const { toast } = useToast()

  const basePrice = 1999

  // Calculate price based on company size and selected services
  const calculatePrice = () => {
    let price = basePrice

    // Adjust for company size
    if (employees > 50) price += 1000
    if (employees > 100) price += 2000
    if (revenue > 1000000) price += 1000
    if (revenue > 5000000) price += 2000

    // Add service costs
    if (services.strategy) price += 500
    if (services.financial) price += 700
    if (services.marketing) price += 600
    if (services.operations) price += 800

    // Apply annual discount
    if (annualBilling) {
      price = price * 10 * 0.85 // 15% discount for annual billing
    }

    return price.toLocaleString("en-US")
  }

  const handleGetQuote = () => {
    toast({
      title: "Quote Generated!",
      description: `Your estimated consulting package: $${calculatePrice()}${annualBilling ? "/year" : "/month"}`,
    })
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Pricing Calculator</CardTitle>
        <CardDescription>
          Estimate the cost of your custom consulting package based on your business needs.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label>Company Size (Employees)</Label>
            <span className="font-medium">{employees}</span>
          </div>
          <Slider value={[employees]} min={1} max={200} step={1} onValueChange={(value) => setEmployees(value[0])} />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1</span>
            <span>50</span>
            <span>100</span>
            <span>150</span>
            <span>200+</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label>Annual Revenue</Label>
            <span className="font-medium">${revenue.toLocaleString("en-US")}</span>
          </div>
          <Slider
            value={[revenue]}
            min={100000}
            max={10000000}
            step={100000}
            onValueChange={(value) => setRevenue(value[0])}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>$100K</span>
            <span>$1M</span>
            <span>$5M</span>
            <span>$10M+</span>
          </div>
        </div>

        <div className="space-y-3">
          <Label>Services Required</Label>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Business Strategy</span>
              <span className="text-sm text-muted-foreground">Strategic planning and growth</span>
            </div>
            <Switch
              checked={services.strategy}
              onCheckedChange={(checked) => setServices({ ...services, strategy: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Financial Consulting</span>
              <span className="text-sm text-muted-foreground">Financial analysis and optimization</span>
            </div>
            <Switch
              checked={services.financial}
              onCheckedChange={(checked) => setServices({ ...services, financial: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Marketing Strategy</span>
              <span className="text-sm text-muted-foreground">Brand development and customer acquisition</span>
            </div>
            <Switch
              checked={services.marketing}
              onCheckedChange={(checked) => setServices({ ...services, marketing: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Operations Management</span>
              <span className="text-sm text-muted-foreground">Process optimization and efficiency</span>
            </div>
            <Switch
              checked={services.operations}
              onCheckedChange={(checked) => setServices({ ...services, operations: checked })}
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="flex flex-col gap-1">
            <span className="font-medium">Annual Billing</span>
            <span className="text-sm text-muted-foreground">Save 15% with annual billing</span>
          </div>
          <Switch checked={annualBilling} onCheckedChange={setAnnualBilling} />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="w-full flex justify-between items-center p-4 bg-muted rounded-lg">
          <div>
            <p className="text-sm font-medium">Estimated Price:</p>
            <p className="text-2xl font-bold">
              ${calculatePrice()}
              <span className="text-sm font-normal text-muted-foreground">/{annualBilling ? "year" : "month"}</span>
            </p>
          </div>
          <Button className="primary-button" onClick={handleGetQuote}>
            Get Detailed Quote
          </Button>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          This is an estimate. Contact us for a personalized quote tailored to your specific needs.
        </p>
      </CardFooter>
    </Card>
  )
}
