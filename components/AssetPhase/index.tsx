import { useContext } from 'react'
import { GlobalUserStoryContext } from '../../model/context'

const AssetPhase = () => {
  const { story, setStory } = useContext(GlobalUserStoryContext)

  return (
    <div className="phase-container">
      <div className="phase-main">
        <h1>
          Assets
          <br />
          <small>A-t-on tous les assets pour réaliser cette fonctionnalité ?</small>
        </h1>

        <h2>Remarques (facultatif)</h2>
        <fieldset>
          <textarea
            name="assets"
            value={story.assets}
            id="user_story_assets"
            onChange={(e) => setStory({ ...story, assets: e.target.value })}
          ></textarea>
        </fieldset>
      </div>
      <div className="phase-guides">
        <h3>Assets ?</h3>
        <p>
          Les assets sont les éléments (généralement images, son, vidéos...) qui agrémentent le visuel d'une
          fonctionnalité.
        </p>

        <h3>Maquettes suivant les plate-formes</h3>
        <p>
          Si il manque des maquettes dans une plate-forme ou un média (exemple: Mobile VS Desktop), il est possible de
          créer des incréments UI qui peuvent être réalisés dans un second temps.
        </p>
      </div>
    </div>
  )
}

export default AssetPhase
