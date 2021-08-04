import React from "react";
import { HeaderComponent} from "components";

const DefaultLayout = ({children}) => {
  return (
    <div>
    	<HeaderComponent />
    	<div className="my-5 pt-3">
		  	{children}
    	</div>
    </div>
  );
};

export default DefaultLayout;
