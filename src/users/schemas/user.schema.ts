import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  accountname: string;

  @Prop()
  password: string;

  @Prop()
  nickname: string;
  
  @Prop()
  task_user:string;
}

export const UserSchema = SchemaFactory.createForClass(User);