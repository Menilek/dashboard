import { React } from 'react';
import { FormGroup, Label, Input, Col } from 'reactstrap';
import { categoryOptions } from '../../util/CategoryOptions';

const AddWordModal = ({
  english,
  setEnglish,
  amharic,
  setAmharic,
  geez,
  setGeez,
  category,
  setCategory
}) => {
  return (
    <div>
      <Col sm={12} md={12} lg={12}>
        <FormGroup>
          <Label for="englishWord">English</Label>
          <Input
            type="text"
            name="english"
            value={english}
            id="englishWord"
            placeholder="Amharic"
            onChange={(e) => setEnglish(e.target.value)}
          />
        </FormGroup>
      </Col>
      <Col sm={12} md={12} lg={12}>
        <FormGroup>
          <Label for="amharichWord">Amharic</Label>
          <Input
            type="text"
            name="amharic"
            value={amharic}
            id="amharichWord"
            placeholder="āmarinya"
            onChange={(e) => setAmharic(e.target.value)}
          />
        </FormGroup>
      </Col>
      <Col sm={12} md={12} lg={12}>
        <FormGroup>
          <Label for="geezWord">Ge&apos;ez</Label>
          <Input
            type="text"
            name="geez"
            value={geez}
            id="geezWord"
            placeholder="አማርኛ"
            onChange={(e) => setGeez(e.target.value)}
          />
        </FormGroup>
      </Col>
      <Col sm={12} md={12} lg={12}>
        <FormGroup>
          <Label for="wordCategory">Category</Label>
          <Input
            type="select"
            name="category"
            id="wordCategory"
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
            {categoryOptions.map((category) => (
              <option value={category.value} key={category.key}>
                {category.category}
              </option>
            ))}
          </Input>
        </FormGroup>
      </Col>
    </div>
  );
};

export default AddWordModal;
