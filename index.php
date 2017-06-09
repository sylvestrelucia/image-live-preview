<?php include "inc/header.inc" ?>


<div class="kvasir">
    <div class="t-index">
        <div class="o-form o-form--full" action="edit.php" method="post">
            <div class="o-form__center">
                <div class="o-form__title">Live responsive image testing</div>
                <p class="o-form__desc">Paste here URL you want to edit</p>
                    <input class="o-form__form--main" type="text" name="url"><br>
                    <p class="o-form__optional">Optional</p>
                    <span class="o-form__asterix">login</span><input class="o-form__form" type="text" name="login"><br>
                    <span class="o-form__asterix">password</span><input class="o-form__form--main"  type="password" name="password"><br>
                    <input class="a-button a-button--filled-red" type="submit" value="Start live editing">
                </div>
            </div>
        </form>
    </div>
</div>


<?php include "inc/footer.inc" ?>