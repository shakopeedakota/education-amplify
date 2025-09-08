'use client';

import { AppProvider } from "@/lib/formState";
import { ApplicationContainer } from "@/components/forms/ApplicationContainer";

export default function ApplicationPage() {
  return (
    <AppProvider>
      <div id="primary" className="content-area flex flex-col w-full flex-grow">
        <main className="w-full flex flex-col items-center flex-grow">
          <div className="content-header bg-white p-4 shadow sticky top-0 w-full flex justify-between z-50">
            <h1 className="text-xl">SMSC Education Department Form</h1>
          </div>
          <div className="content-body w-full flex flex-grow">
            <div className="App w-full flex flex-grow">
              <div className="application max-w-[768px] mx-auto p-8">
                <ApplicationContainer />
              </div>
            </div>
          </div>
        </main>
      </div>
    </AppProvider>
  );
}