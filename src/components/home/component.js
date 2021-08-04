

function HomeComponent(props) {
  return (
    <>
   <div className='centerplease'>
 <b>  About Us </b> 
  <br/></div><br/>
  <div class="row">
    <div class="col-md-8 offset-md-2">
  <p> ETark is an automated complaint resolution platform for smartphone complaints. We help in resolving both technical and non-technical smartphone problems via. our service offerings. ETark was conceptualized after identifying the plight of hapless smartphone customers and the inefficiency of the service centers.

How ETark helps customers?  </p></div></div>
<br/>


 <div class="row">
<center>
<h5><b>Resolving technical problems :</b></h5></center></div>

 <div class="row">
    <div class="col-md-8 offset-md-2">
  <p> Having a technical problem with your smartphone can be disastrous because unlike any other gadget, a smartphone lets you stay connected with the world and manage all your electronic records. The current approaches that a user usually takes :</p></div></div>
<div className="content">
<div  class="col-md-8 offset-md-2">
  <input type="checkbox" id="question1" name="q"  className="questions"/>
  <div className="plus">+</div>
  <label for="question1" className="question">
   <b> Visit an authorized service center</b>
  </label>
  <div className="answers">
   While an authorized service center is always recommended, but as a user, you don’t know if:<br/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A. Parts are available at the service center to service your device<br/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B. Your device would be considered within warranty by the service center<br/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C. The exact problem in your device and the price to be paid to fix that<br/>




All this demands you to visit the service center and wait in a queue with other customers which can often take hours with the possibility of parts not available or the device not considered within warranty by the service center or the quoted price of servicing out of your budget! </div>
</div>

<div class="col-md-8 offset-md-2">
  <input type="checkbox" id="question2" name="q" className="questions"/>
  <div className="plus">+</div>
  <label for="question2" className="question">
  <b> Visit an unauthorized service center</b>
  </label>
  <div className="answers">
   <b>Although an unauthorized service center might seem light on your pocket, this route is never recommended because :</b>
<ul>
  <li>Due to the poor quality of servicing, they often result in frequent annual repairs for the same issue or some other problem thus making the actual cost of repair for that phone way higher than the cost of repair by an authorized service centerDue to the poor quality of servicing, they often result in frequent annual repairs for the same issue or some other problem thus making the actual cost of repair for that phone way higher than the cost of repair by an authorized service center</li>
  <li>Your personal data could be retrieved from your device even if you have removed the same from your device. So due to low accountability of unauthorized service centers, data could be stolen from your device during servicing</li>
  
</ul>

  </div>
</div>
  
<div class="col-md-8 offset-md-2">
  <input type="checkbox" id="question3" name="q" className="questions"/>
  <div className="plus">+</div>
  <label for="question3" className="question">
    <b>Book for a home visit repair service</b>
  </label>
  <div className="answers">
    <b>Home visit repair services are quite popular nowadays due to the convenience of home repair that they promise but this should be avoided due to the following reasons:</b>
  
  <ul>
  <li>Most of the home repair services don’t have any authorization from the device manufacture to provide servicing, thus the accountability and quality of servicing is low
  </li>
  <li>
  Many a times your device demands a part replacement which may not be available for the home visit repair agent at that point and post their inspection of the device at your location, they might take your device to their service center thus causing an additional delay in the servicing of the device
  </li>
  </ul>
  
  
    </div>
</div>


<div class="col-md-8 offset-md-2">
  <input type="checkbox" id="question4" name="q" className="questions"/>
  <div className="plus">+</div>
  <label for="question4" className="question">
    <b>Device Insurance companies</b>
  </label>
  <div className="answers">
    <b>Although device Insurance companies promise to insure your device from future damage or malfunctioning:</b>
  
  <p>Most of the home repair services don’t have any authorization from the device manufacture to provide servicing, thus the accountability and quality of servicing is low
  </p>
  <p>
  Many a times your device demands a part replacement which may not be available for the home visit repair agent at that point and post their inspection of the device at your location, they might take your device to their service center thus causing an additional delay in the servicing of the device
  </p>

    </div>
</div>



</div>

<br/><br/><div class="row">
<div className='row'><center>
  <h5><b>Resolving non-technical problems :</b></h5></center>
  <br/></div>
  <div class="row">
    <div class="col-md-8 offset-md-2">
  <p> Problems like missing, damaged or duplicate items during purchase or Payment related issues like improper bill, wrongful deductions etc are some of the examples of non- technical problems that customers face.</p><br/>
  <p>he ideal way to solve this is to reach out to the seller (e-commerce firm/ offline retailer) or the device manufacturer (e.g. Samsung, Apple etc.). However a customer’s voice can go unheard in a discussion with the other party. So to lend a strength to the customer’s voice, we do an instant analysis of his/ her complaint and share certain reports with him/ her which can help identify the merit of the complaint/ grievance.
</p></div></div>
</div>
	




<div className="content">
<div class="col-md-8 offset-md-2">
  <input type="checkbox" id="question6" name="q" className="questions"/>
  <div className="plus">+</div>
  <label for="question6" className="question">
   <b> Chances of winning</b>
  </label>
  <div className="answers">
   <p>Chances of winning tells you how likely you are to win in a consumer court had the complaint been filed there
</p>

<p>Or Alternatively
</p>

<p>How likely you are to win in a negotiation with the other party (device manufacturer or seller) by quoting your winning chances in a consumer court as a reference
</p>
    </div>
</div>
<div class="col-md-8 offset-md-2">
  <input type="checkbox" id="question5" name="q" className="questions"/>
  <div className="plus">+</div>
  <label for="question5" className="question">
  <b> Expected compensation</b>
  </label>
  <div className="answers">
    <p>Expected compensation tells you what compensation (free servicing, product/ part replacement or monetary compensation) you are likely to get from the other party had your complaint been filed in a consumer court</p>

  <p>Or Alternatively,</p>
 
  <p>what compensation (free servicing, product/ part replacement) you are likely to get from the other party in a negotiation</p>
 
  </div>
    </div>

</div>
	</>
  );
};

export default HomeComponent;
