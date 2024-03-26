import React, { useState, ReactNode } from 'react';
import TabButton from './TabButton';
import TabItem from './TabItem';

interface TabProps {
  children: ReactNode;
}

const Tab: React.FC<TabProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="flex border-b" role="tablist">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && child.type === TabItem) {
            return (
              <TabButton                
                isActive={index === activeTab}
                onClick={() => handleTabClick(index)}
                role="tab"
                key={index}
                
              >
                {child.props.label}
              </TabButton>
            );
          }
        })}
      </div>
      <div>
        {React.Children.map(children, (child, index) =>
          React.isValidElement(child) && child.type === TabItem ? (
            <TabItem isActive={index === activeTab}>{child.props.children}</TabItem>
          ) : null
        )}
      </div>
    </div>
  );
};

export { Tab, TabItem };
