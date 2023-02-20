

const Input = (props) => (
    <p>
    <label>
        Kwota (zł):
        <input type="number" name="amount" min="1" step="0.1" required autofocus
            placeholder="Wpisz kwotę" />
    </label>
</p>
);

export default Input;