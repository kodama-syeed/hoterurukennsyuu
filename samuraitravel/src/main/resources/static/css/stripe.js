console.log("stripe.jsを読み込みました");
document.addEventListener("DOMContentLoaded", () => {
    console.log("stripe.jsを読み込みました");

    const paymentButton = document.querySelector("#paymentButton");

    if (!paymentButton) {
        console.error("決済ボタンが見つかりません");
        return;
    }

    console.log("決済ボタンを取得しました");

    paymentButton.addEventListener("click", () => {
        console.log("決済ボタンがクリックされました");

        const sessionUrl = paymentButton.dataset.sessionUrl;

        console.log("決済URLを取得できたか:", !!sessionUrl);

        if (!sessionUrl) {
            alert("決済URLが取得できません。StripeServiceを確認してください。");
            return;
        }

        if (!sessionUrl.startsWith("https://")) {
            alert("決済URLが正しくありません。");
            console.error("不正な決済URLです");
            return;
        }

        window.location.assign(sessionUrl);
    });
});