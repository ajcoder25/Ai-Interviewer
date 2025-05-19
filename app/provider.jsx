'use client'

function ({children}){
  return(
     <div>
        supabase.auth.getUser().then(async({data,error}))
     </div>
  )
}