<script>
export default {
    name: 'HomeView'
}
</script>

<template>
    <div class="violet pb-5">
        <div class="container">
            <h2 class="jumbo p-5 rounded-5 bg_card">Welcome to our snowy haven! Get ready to carve your way through the
                latest
                updates on
                weather and snow
                conditions at your favorite ski and snowboard destinations. It's time to turn every forecast into a
                powder-filled adventure!
            </h2>

            <div class="row row-cols-1 row-cols-md-3 g-3 py-5">

                <div class="col">
                    <div class="card rounded-5 shadow">
                        <div class="card-img-top">
                            <img class="img-fluid rounded-top-5" src="../assets/img/sciatore.jpg" alt="">
                        </div>
                        <div class="card-body rounded-bottom-5 bg_card">
                            <h4 class="text-center">Are You a skier?</h4>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card rounded-5 shadow">
                        <div class="card-img-top">
                            <img class="img-fluid rounded-top-5" src="../assets/img/snowboard.jpg" alt="">
                        </div>
                        <div class="card-body rounded-bottom-5 bg_card">
                            <h4 class="text-center">Are You a snowboarder?</h4>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card rounded-5 shadow">
                        <div class="card-img-top">
                            <img class="img-fluid rounded-top-5" src="../assets/img/baby.jpg" alt="">
                        </div>
                        <div class="card-body rounded-bottom-5 bg_card">
                            <h4 class="text-center">Are You a beginner?</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-center">
                <div class=" col-6 p-3 bg_card rounded-5 shadow-lg">
                    <h4>Get in Touch</h4>
                    <label for="" class="form-label">Leave Your Email to subscibe</label>
                    <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId"
                        placeholder="shawnwhite@example.com" />

                </div>
            </div>


        </div>

    </div>
</template>

<style></style>