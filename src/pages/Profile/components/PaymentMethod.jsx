import React from 'react'

export default function PaymentMethod() {
  return (
     <div className=" ">
          <div className="flex items-center justify-between ">
            <div>
              <h2 className="text-2xl font-bold text-blue-900">Add Payment Method</h2>
            </div>
           
          </div>
           <form className="mt-6 space-y-4 max-w-[340px]">
                <div>
                  <label className="block text-sm font-medium text-secondary">
                    Name on Card*
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. John"
                    className="mt-1 w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary">
                    Debit/Credit card number*
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="0000 0000 0000 0000"
                    className="mt-1 w-full p-3 border rounded-md tracking-widest text-sm focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary">
                      Expiry Date *
                    </label>
                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="mt-1 w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary">
                      CVV *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 123"
                      className="mt-1 w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-200"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" className="h-4 w-4 mt-1 accent-primary" />
                  <p className="text-sm text-secondary">
                    Receive text alerts about this trip. Message and data rates
                    may apply.
                  </p>
                </div>
                <button className='btn-pri w-full'>Add</button>
            
              </form>
      
    </div>
  )
}
