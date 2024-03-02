import '../assets/css/input.css'
import React, { useState } from "react";

export function Input(props){

    return (
        <div class="form-container">
            <form onSubmit={props.submit} class="form">
            <div class="form-group">
                <label for="name">Username / Pseudo</label>
                <input required="" name="author" type="text"
                    onChange={(e) => props.author_method(e.target.value)}/>
            </div>

            <div class="form-group">
                <label for="name">Photo de l'auteur (Lien vers la photo)</label>
                <input required="" name="image" type="text"
                    onChange={(e) => props.image_method(e.target.value)}/>
            </div>

            <div class="form-group">
                <label for="textarea">Liberez votre inspiration</label>
                <textarea required="" cols="20" rows="10" id="textarea" name="content"
                    onChange={(e) => props.content_method(e.target.value)}></textarea>
            </div>
            <button type="submit" class="form-submit-btn">Creez</button>
            </form>
        </div>
    );
}
