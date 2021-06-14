class Error {
    render() {
        const html = `
            <div class="error-message">
                <h2>Нет доступа!</h2>
                <p>Попробуйте зайти позже</p>
            </div>
        `;
        
        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();