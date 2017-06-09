<?php include "inc/header.inc" ?>

    <div class="t-index">

        <div class="kvasir">
            <form class="o-form o-form--full" action="edit.php" method="post">
                <div class="o-form__center">
                    <div class="o-form__title">Live responsive image testing</div>
                    <p class="o-form__desc">Paste here URL you want to edit</p>
                    <div class="o-form__form-wrapper"><input class="o-form__form o-form__form--full" type="text" name="url" placeholder="https://siroop.ch">
                        <input class="a-button a-button--filled-red o-form__submit" type="submit" value="Start live editing"></div>
                    <p class="o-form__optional">Optional</p>
                        <div class="o-form__form-wrapper"><span class="o-form__input-title o-form__asterix">Login</span><input class="o-form__form" type="text" name="login"></div>
                    <div class="o-form__form-wrapper"><span class="o-form__input-title o-form__asterix">Password</span><input class="o-form__form"  type="password" name="password"></div>
                </div>
            </form>

            <?php
                if( ini_get('allow_url_fopen') ) {
                    echo "allow_url_fopen allowed";
                }
            ?>

        </div>
    </div>


<?php include "inc/footer.inc" ?>