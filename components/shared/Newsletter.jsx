import React from 'react'

export default function Newsletter() {
  return (
    <div>
          <form action="">
            <div className="grid md:grid-cols-3 gird-cols-1 gap-4 justify-center items-center">
              <div className="md:ml-auto md:mb-6">
                <p className="">
                  <strong>Inscrivez-vous à notre newsletter</strong>
                </p>
              </div>

              <div className="md:mb-6">
                <input
                  type="text"
                  className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                  id="exampleFormControlInput1"
                  placeholder="Email address"
                />
              </div>

              <div className="md:mr-auto mb-6">
                <button
                  type="submit"
                  className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  S&apos;abonner
                </button>
              </div>
            </div>
          </form>
        </div>
  )
}
