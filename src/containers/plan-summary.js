import { BiChevronRight } from 'react-icons/bi';
const PlanSummary = () => {

    return (
        <div className="block p-5">
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 ">
        <div className="border-solid border h-full p-5">
          <div >
            <h3 className="mb-5 text-3xl m-2">Plan Summary</h3>
            <p class="text-sm text-gray-600 flex items-center m-2">
              <svg className="w-8 mr-2" version="1.1" x="0px" y="0px" viewBox="0 0 24 24">
                <path d="M22.1,6.2h-4.4V4.4c0-1.2-0.9-2.1-2.1-2.1H8.3c-1.2,0-2.1,0.9-2.1,2.1v1.8H1.8C0.8,6.2,0,7,0,8v11.9
                  c0,1,0.8,1.8,1.8,1.8h20.4c0.5,0,0.9-0.2,1.3-0.5c0.3-0.3,0.5-0.8,0.5-1.3V8C23.9,7,23.1,6.2,22.1,6.2z M8,4.4
                  c0-0.1,0.1-0.3,0.3-0.3h7.4c0.1,0,0.3,0.1,0.3,0.3v1.8H8V4.4z M15.9,14.9h-3.1V18H11v-3.1H8V13h3.1v-3h1.8v3H16L15.9,14.9L15.9,14.9
                  z"></path>
              </svg>
              <span className="text-xl">Healthy Blue Advantage</span>
            </p>
            <div className="bg-sky-100 p-3 mb-6">
              Note: This Plan includes BlueVision.
            </div>
            <div className="grid grid-cols-3">
              <div>Member ID</div>
              <div>Group#</div>
              <div>Effective Date</div>
              <div>1234567</div>
              <div>87654</div>
              <div>Apr 1, 2021</div>
            </div>
          </div>
          <div className="border-b border-grey pin-t mt-2 w-full my-2 mb-2" />
          <div className="flex justify-between text-xl text-sky-400">
            <div className='flex justify-between align-bottom'><div>ID Cards</div> <BiChevronRight size={32} /></div>
            <div>Coverage Details</div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default PlanSummary