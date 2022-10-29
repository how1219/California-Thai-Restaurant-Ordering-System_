import React from "react"

export default function Form() {
    return (
        <div>
        
         <h1 className="form--title">Food Order Form</h1>
            <p className="form--note">Please fill out this form to order food</p>
        <form action="https://getform.io/f/2918b7f1-d47a-401a-bf6d-f72da9ff4e3b" method = "POST">
      <fieldset>
        <label for="first-name">Enter Your First Name: <input id="first-name" name="first-name" type="text" required /></label>
        <label for="last-name">Enter Your Last Name: <input id="last-name" name="last-name" type="text" required /></label>
        <label for="tel">Enter Your Phone Number: <input id="phone" name="phone" type="tel" pattern="[0-9]{10}" /></label>
      </fieldset>
        <fieldset>
        <h4>Meat</h4>
        <label className="items">
            <input  id="Thai Mango Chicken" type="number" min="0" name="Thai Mango Chicken" className="inline" placeholder="quantity" />Thai Mango Chicken
        </label>
        <label for="options" name="options" className="items">
          <input id="Santa Barbara Chicken" type="number" min="0" name="Santa Barbara Chicken" className="inline"/>Santa Barbara Chicken
        </label>
        <label className="items">
          <input id="General Thai Chicken" type="number" min="0" name="General Thai Chicken" className="inline" />General Thai Chicken
        </label>
        <label className="items">
          <input id="Bangkok Chicken" type="number" min="0" name="Bangkok Chicken" className="inline" />Bangkok Chicken
        </label>
        <label className="items">
          <input id="Red Curry Chicken" type="number" min="0" name="Red Curry Chicken" className="inline" />Red Curry Chicken
        </label>      
        <label className="items">
          <input id="Green Curry Chicken" type="number" min="0" name="Green Curry Chicken" className="inline" />Green Curry Chicken
        </label>
        <label className="items">
          <input id="Thai Chill Fish" type="number" min="0" name="Thai Chill Fish" className="inline" />Thai Chill Fish
        </label>
        <h4>Veggie</h4>
        <label className="items">
          <input id="Sweet Potato" type="number" min="0" name="Sweet Potato" className="inline" placeholder="quantity"/>Sweet Potato
        </label>
        <label className="items">
          <input id="Eggplant Tofu" type="number" min="0" name="Eggplant Tofu" className="inline" />Eggplant Tofu
        </label>
        <label className="items">
          <input id="Chill Green Bean" type="number" min="0" name="Chill Green Bean" className="inline" />Chill Green Bean
        </label>
        <label className="items">
          <input id="Veggie Mix" type="number" min="0" name="Veggie Mix" className="inline" />Veggie Mix
        </label>
        <label className="items">
          <input id="Spring Roll" type="number" min="0" name="Spring Roll" className="inline" />Spring Roll
        </label>

        <h4>Rice or Noddle Mains</h4>
        <label className="items">
          <input id="Thai Basil Fried Rice" type="number" min="0" name="Thai Basil Fried Rice" className="inline" placeholder="quantity"/>Thai Basil Fried Rice
        </label>
         <label className="items">
          <input id="Pineapple Fried Rice" type="number" min="0" name="Pineapple Fried Rice" className="inline" />Pineapple Fried Rice
         </label>
         <label className="items">
           <input id="classNameic Pad Thai" type="number" min="0" name="classNameic Pad Thai" className="inline" />classNameic Pad Thai
         </label>
         <label className="items">
          <input id="White Rice" type="number" min="0" name="White Rice" className="inline" />White Rice</label>
         <h4>Drinks</h4>
         <label className="items">
           <input id="Apple Juice" type="number" min="0" name="Apple Juice" className="inline" placeholder="quantity"/>Apple Juice</label>
         <label className="items">
           <input id="Orange Juice" type="number" min="0" name="Orange Juice" className="inline" />Orange Juice</label>
         <label className="items">
           <input id="Iced Tea" type="number" min="0" name="Iced Tea" className="inline" />Iced Tea</label>
         <label className="items">
           <input id="Pop" type="number" min="0" name="Pop" className="inline" />Pop</label>
       </fieldset>


      <fieldset>
        <label for="note">Note:
          <textarea id="note" name="note" rows="3" cols="30" placeholder="eg: Nooo spicy"></textarea>
        </label>
        <label for="utensils" name="utensils">
          <input id="utensils" type="checkbox" name="utensils" className="inline" />Include utensils and condiments
        </label>
        <label for="pick-up-time">Your order will be ready in <strong>30 minutes</strong>.
          </label>
      </fieldset>
      <input type="submit" value="Submit" />
     </form>
    </div>
    )
}
