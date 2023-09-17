import { createClient } from "@supabase/supabase-js";
const key= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRocHV5d3Fyamx2cXl2bmR5ZHFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3OTQ1NjIsImV4cCI6MjAxMDM3MDU2Mn0.JqQQg2xrRyNEYg8M-Hv6EYyhMQb4Dgn76IjbUtudPWk'
const url= 'https://dhpuywqrjlvqyvndydqc.supabase.co'
export const supabase =createClient(url,key)
