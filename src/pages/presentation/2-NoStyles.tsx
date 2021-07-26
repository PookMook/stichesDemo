import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"
import { nbsp, Text } from "ui/text"

export default function PresentationPage(): JSX.Element {
  useNavigation("/presentation/3-TailwindCSS", "/presentation/1-whatUIDS")
  return (
    <Slide as="div" Disposition="Titled">
      <Text as="h2">
        Example of UI{nbsp}Design{nbsp}System: No{nbsp}Styles{nbsp}/{nbsp}&quot;Pure{nbsp}HTML&quot;
      </Text>
      <main>
        <h1>h1</h1>
        <details open>
          <summary>This is the summary</summary>
          <p>
            Here is the expanded text, with <strong>strong</strong> and <em>emphasised</em>
          </p>
        </details>
        <form>
          <fieldset>
            <legend>Form Legend</legend>
            <div>
              <label>
                Text Input: <input type="text" placeholder="I'm a text input" />
              </label>
            </div>
            <div>
              <label htmlFor="select">Select Input: </label>
              <select id="select">
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
              </select>
            </div>
          </fieldset>
          <fieldset>
            <legend>Another fieldSet</legend>
            <label>
              Autocomplete: <input type="text" placeholder="Autocomplete" list="datalist" />
              <datalist id="datalist">
                <option>Arthur</option>
                <option>Bruno</option>
                <option>Catherine</option>
                <option>Daphné</option>
                <option>Elise</option>
              </datalist>
            </label>
            <div>
              Checkboxes:
              <label>
                A<input type="checkbox" />
              </label>
              <label>
                B<input type="checkbox" />
              </label>
              <label>
                C<input type="checkbox" />
              </label>
              <label>
                D<input type="checkbox" />
              </label>
              <label>
                E<input type="checkbox" />
              </label>
            </div>
            <div>
              Radio:
              <label>
                A<input type="radio" name="radio" />
              </label>
              <label>
                B<input type="radio" name="radio" />
              </label>
              <label>
                C<input type="radio" name="radio" />
              </label>
              <label>
                D<input type="radio" name="radio" />
              </label>
              <label>
                E<input type="radio" name="radio" />
              </label>
            </div>
          </fieldset>
          <p>
            This is a paragraph, with a <a href="#">link here</a>.
          </p>
          <button type="reset">Reset</button>
          <button disabled>Disabled</button>
          <button type="submit">Submit</button>
        </form>
      </main>
    </Slide>
  )
}
