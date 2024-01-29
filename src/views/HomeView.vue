<script>
export default {
    name: 'HomeView'
}
</script>

<template>
    <div class="violet">
        <div class="container">
            <h2>Welcome to our snowy haven! Get ready to carve your way through the latest updates on weather and snow
                conditions at your favorite ski and snowboard destinations. It's time to turn every forecast into a
                powder-filled adventure! 🎿❄️
            </h2>

            <div class="row row-cols-1 row-cols-md-3 g-3 py-4">

                <div class="col">
                    <div class="card rounded-5 shadow">
                        <div class="card-img-top">
                            <img class="img-fluid rounded-top-5" src="../assets/img/sciatore-capacità-sport.jpg" alt="">
                        </div>
                        <div class="card-body rounded-bottom-5 violet">
                            <h4 class="text-center">Che tu sia uno sciatore</h4>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card rounded-5 shadow">
                        <div class="card-img-top">
                            <img class="img-fluid rounded-top-5" src="../assets/img/snowboarder.jpg" alt="">
                        </div>
                        <div class="card-body rounded-bottom-5 violet">
                            <h4 class="text-center">Che tu sia uno snowboarder</h4>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card rounded-5 shadow">
                        <div class="card-img-top">
                            <img class="img-fluid rounded-top-5" src="../assets/img/baby.jpg" alt="">
                        </div>
                        <div class="card-body rounded-bottom-5 violet">
                            <h4 class="text-center">Che tu sia un principiante</h4>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId"
                    placeholder="abc@mail.com" />
                <small id="emailHelpId" class="form-text text-muted">Help text</small>
            </div> -->


        </div>

    </div>
</template>

<style>
.violet {
    /* background-color: #925b85; */
    background-color: #a4b2df;

}
</style>