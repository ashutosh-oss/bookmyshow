import { Disclosure } from '@headlessui/react'
//icons
import {BiChevronUp,BiChevronDown} from 'react-icons/bi';

const PlaysFilter = (props) => {
    return (
      <Disclosure>
        
        { ({open}) => (
          <>
          <Disclosure.Button className="flex items-center gap-3 py-2">
            {open? <BiChevronUp/>: <BiChevronDown/>}{""}
            <span className={open? "text-red-600" : "text-gray-700"}>{props.title}</span>
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500">
         <div className="flex items-center flex-wrap gap-3">
           {props.tags.map((tag) => (
             <>
             <div className="border-gray-400 p-3 border-2">
             <span className="text-red-600">{tag}</span>
           </div>
             </>
           ))}
         </div>
        </Disclosure.Panel>
          </>
        )}
        
      </Disclosure>
    );
  };
  
  export default PlaysFilter;
  