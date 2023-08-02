export function initData() {
    let initDataUnsafe = (window as any).Telegram.WebApp.initDataUnsafe || {}
    if (!!initDataUnsafe.user) {
        (window as any).Telegram.WebApp.expand();
    } else {
        initDataUnsafe.user = {
            id:980981769,
            first_name:"Евгений",
            last_name:"Волков",
            username:"evgeniyvolkov93",
            language_code:"ru",
            account:"6"
        };
    }

    return initDataUnsafe;
}